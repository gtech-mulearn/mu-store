from rest_framework.views import APIView
from datetime import datetime, timedelta
from utils.utils import CommonUtils
from utils.response import CustomResponse
from utils.permission import CustomizePermission, JWTUtils
from django.db.models import Avg
from django.utils import timezone
from django.utils.dateparse import parse_datetime
from django.db.models import Count, Case, When, IntegerField, DateTimeField , F

from api.models import (
    Project,
    ProjectImage,
    Comment,
    Vote,
    User
)

from api.serializer import (
    ProjectSerializer,
    ProjectUpdateSerializer,
    CommentSerializer,
    VoteSerializer
)


class WeeklyLeaderboardAPIView(APIView):
    authentication_classes = [CustomizePermission]

    def get(self, request):
        today = timezone.now()
        start_week = today - timedelta(days=today.weekday())  # Monday of this week
        start_week = today - timedelta(days=today.weekday())  # Monday of this week
        end_week = start_week + timedelta(days=6)  # Sunday of this week
        projects = Project.objects.filter(created_at__range=[start_week, end_week])
        # Annotate each project with the count of upvotes and downvotes
        projects = projects.annotate(
            upvotes=Count(Case(When(votes__vote='upvote', then=1), output_field=IntegerField())),
            downvotes=Count(Case(When(votes__vote='downvote', then=1), output_field=IntegerField()))
        ) 
        projects = projects.annotate(vote_difference=F('upvotes') - F('downvotes'))
        projects = projects.order_by('-vote_difference')

        serializer = ProjectSerializer(projects, many=True)
        return CustomResponse(response={"Projects": serializer.data}).get_success_response()
    
class MonthlyLeaderboardAPIView(APIView):
    authentication_classes = [CustomizePermission]

    def get(self, request):
        today = timezone.now()
        start_month = today.replace(day=1)  # First day of this month
        end_month = (start_month + timedelta(days=32)).replace(day=1) - timedelta(days=1)  # Last day of this month
        print(start_month, end_month)
        projects = Project.objects.filter(created_at__range=[start_month, end_month])
        projects = projects.annotate(
            upvotes=Count(Case(When(votes__vote='upvote', then=1), output_field=IntegerField())),
            downvotes=Count(Case(When(votes__vote='downvote', then=1), output_field=IntegerField()))
        ) 
        projects = projects.annotate(vote_difference=F('upvotes') - F('downvotes'))
        projects = projects.order_by('-vote_difference')
        serializer = ProjectSerializer(projects, many=True)
        return CustomResponse(response={"Projects": serializer.data}).get_success_response()
    
class OverallLeaderboardAPIView(APIView):
    authentication_classes = [CustomizePermission]

    def get(self, request):
        projects = Project.objects.all()
        projects = projects.annotate(
            upvotes=Count(Case(When(votes__vote='upvote', then=1), output_field=IntegerField())),
            downvotes=Count(Case(When(votes__vote='downvote', then=1), output_field=IntegerField()))
        ) 
        projects = projects.annotate(vote_difference=F('upvotes') - F('downvotes'))
        projects = projects.order_by('-vote_difference')
        serializer = ProjectSerializer(projects, many=True)
        return CustomResponse(response={"Projects": serializer.data}).get_success_response()
    
class CustomLeaderboardAPIView(APIView):
    authentication_classes = [CustomizePermission]

    def get(self, request):
        start_date_str = request.GET.get('start_date', None)
        end_date_str = request.GET.get('end_date', None)

        projects = Project.objects.all()

        if start_date_str and end_date_str:
            start_date = parse_datetime(start_date_str)
            end_date = parse_datetime(end_date_str)
            projects = projects.filter(created_at__range=(start_date, end_date))

        projects = projects.annotate(
            upvotes=Count(Case(When(votes__vote='upvote', then=1), output_field=IntegerField())),
            downvotes=Count(Case(When(votes__vote='downvote', then=1), output_field=IntegerField()))
        ) 
        projects = projects.annotate(vote_difference=F('upvotes') - F('downvotes'))
        projects = projects.order_by('-vote_difference')
        serializer = ProjectSerializer(projects, many=True)
        return CustomResponse(response={"Projects": serializer.data}).get_success_response()
     
class ProjectDetailAPIView(APIView):
    authentication_classes = [CustomizePermission]
    def get(self, request, pk=None):
        if pk is not None:
            project = Project.objects.get(id=pk)
            serializer = ProjectSerializer(project)
            return CustomResponse(
                response={"Project": serializer.data}
            ).get_success_response()
        else:
            return CustomResponse(
                general_message="no Project id provided"
            ).get_failure_response()
            
    def put(self, request, pk=None):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        if pk is None:
            return CustomResponse(
                general_message="no Project id provided"
            ).get_failure_response()
        project = Project.objects.get(id=pk)
        images_data = request.FILES.getlist('images')
        data = request.data.copy()
        if 'images' in data:
            del data['images']
        serializer = ProjectUpdateSerializer(project, data=data, partial=True)
        if serializer.is_valid():
            serializer.save(updated_by=user)
            if images_data:
                ProjectImage.objects.filter(project=project).delete()
                for image in images_data:
                    ProjectImage.objects.create(project=project, image=image)
            read_serializer = ProjectSerializer(serializer.instance)
            return CustomResponse(
                response={"Project": read_serializer.data}
            ).get_success_response()
        return CustomResponse(general_message=serializer.errors).get_failure_response()
    
    def delete(self, request, pk=None):
        if pk is not None:
            try:
                project = Project.objects.get(id=pk)
                project.delete()
                return CustomResponse(
                    general_message="Project deleted successfully"
                ).get_success_response()
            except Project.DoesNotExist:
                return CustomResponse(
                    general_message="Project not found"
                ).get_failure_response()
        else:
            return CustomResponse(
                general_message="no Project id provided"
            ).get_failure_response()


class ProjectsAPIView(APIView):
    authentication_classes = [CustomizePermission]
    def get(self, request):
        projects = Project.objects.all()
        paginated_projects = CommonUtils.get_paginated_queryset(
            queryset=projects,
            request=request,
            search_fields=[],  
            sort_fields={'created_at': 'created_at'},  
            is_pagination=True,
        )
        serializer = ProjectSerializer(paginated_projects['queryset'], many=True)
        return CustomResponse().paginated_response(
            data={"Projects": serializer.data},
            pagination=paginated_projects['pagination']
        )
        
    def post(self, request):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        images_data = request.FILES.getlist('images')
        data = request.data.copy()
        if 'images' in data:
            del data['images']
        serializer = ProjectUpdateSerializer(data=data)
        if serializer.is_valid():
            project = serializer.save(created_by=user, updated_by=user)
            if images_data:
                for image in images_data:
                    ProjectImage.objects.create(project=project, image=image)
                    
            read_serializer = ProjectSerializer(project)
            return CustomResponse(
                response={"Project": read_serializer.data}
            ).get_success_response()
        else:
            return CustomResponse(general_message=serializer.errors).get_failure_response()

    
class ProjectVoteAPI(APIView):
    authentication_classes = [CustomizePermission]
    def post(self, request):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        project_id = request.data.get('project')  # replace 'project' with the actual field name for the project in your Vote model
        if Vote.objects.filter(user=user, project_id=project_id).exists():
            return CustomResponse(general_message="You have already voted for this project.").get_failure_response()
        serializer = VoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user,created_by=user)
            return CustomResponse(
                response={"Vote": serializer.data}
            ).get_success_response()
        return CustomResponse(general_message=serializer.errors).get_failure_response()
    
    def put(self, request,pk):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        vote = Vote.objects.get(id=pk)
        serializer = VoteSerializer(vote, data=request.data)
        if serializer.is_valid():
            serializer.save(updated_by=user)
            return CustomResponse(
                response={"Vote": serializer.data}
            ).get_success_response()
        return CustomResponse(message=serializer.errors).get_failure_response()
    
    def delete(self, request,pk):
        try:
            vote = Vote.objects.get(id=pk)
            vote.delete()
            return CustomResponse(
                general_message="Vote deleted successfully"
            ).get_success_response()
        except Vote.DoesNotExist:
            return CustomResponse(
                general_message="vote not found"
            ).get_failure_response()


class ProjectCommentAPI(APIView):
    authentication_classes = [CustomizePermission]
    def post(self, request):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user,created_by=user)
            return CustomResponse(
                response={"Comment": serializer.data}
            ).get_success_response()
        return CustomResponse(general_message=serializer.errors).get_failure_response()

    def put(self, request,pk):
        user = User.objects.get(id=JWTUtils.fetch_user_id(request))
        comment = Comment.objects.get(id=pk)
        request.data.setdefault('project', comment.project.id)
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save(updated_by=user)
            return CustomResponse(
                response={"Comment": serializer.data}
            ).get_success_response()
        return CustomResponse(message=serializer.errors).get_failure_response()

    def delete(self, request, pk):
        try:
            comment = Comment.objects.get(id=pk)
            comment.delete()
            return CustomResponse(
                general_message="comment deleted successfully"
            ).get_success_response()
        except Comment.DoesNotExist:
            return CustomResponse(
                general_message="comment not found"
            ).get_failure_response()
            
            
