from rest_framework import serializers

from api.models import ( 
    User,
    Project, 
    ProjectImage,
    Comment, 
    Vote 
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'full_name','muid'
        ]

class VoteSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.full_name',read_only=True)
    updated_by = serializers.CharField(source='updated_by.full_name',read_only=True)
    created_by = serializers.CharField(source='created_by.full_name',read_only=True)
    
    class Meta:
        model = Vote
        fields = "__all__"
    

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.full_name',read_only=True)
    updated_by = serializers.CharField(source='updated_by.full_name',read_only=True)
    created_by = serializers.CharField(source='created_by.full_name',read_only=True)
    
    class Meta:
        model = Comment
        fields = "__all__"
    
    def update(self, instance, validated_data):
        validated_data.setdefault('project', instance.project)
        return super().update(instance, validated_data)
class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['image']
            
class ProjectSerializer(serializers.ModelSerializer):
    updated_by = serializers.CharField(source='updated_by.full_name',read_only=True)
    created_by = serializers.CharField(source='created_by.full_name',read_only=True)
    logo = serializers.ImageField(max_length=None, use_url=True)
    images = ProjectImageSerializer(many=True, read_only=True)
    votes = VoteSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    contributors = UserSerializer(many=True)
    upvotes_count = serializers.SerializerMethodField()
    downvotes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "logo",
            "images",
            "description",
            "link",
            "contributors",
            "upvotes_count",
            "downvotes_count",
            "comments_count",
            "created_at",
            "updated_at",
            "created_by",
            "updated_by",
            "votes",
            "comments"
            
        ]
    def get_upvotes_count(self, obj):
        return obj.votes.filter(vote='upvote').count()

    def get_downvotes_count(self, obj):
        return obj.votes.filter(vote='downvote').count()

    def get_comments_count(self, obj):
        return obj.comments.count()

class ProjectUpdateSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True)
    contributors = serializers.ListField(
        child=serializers.CharField(), write_only=True, required=False
    )
    title = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    link = serializers.URLField(required=False)

    class Meta:
        model = Project
        fields = [
            "title",
            "logo",
            "images",
            "description",
            "link",
            "contributors"
        ]
    def create(self, validated_data):
        print(validated_data)
        contributors_list = validated_data.pop('contributors', [])
        contributors_string = contributors_list[0] if contributors_list else ''
        contributors_muid = contributors_string.split(',') if contributors_string else []
        validated_data.pop('images', [])
        project = Project.objects.create(**validated_data)
        for muid in contributors_muid:
            user = User.objects.get(muid=muid.strip())
            project.contributors.add(user)
        return project

    def update(self, instance, validated_data):
        contributors_list = validated_data.pop('contributors', [])
        contributors_string = contributors_list[0] if contributors_list else ''
        contributors_muid = contributors_string.split(',') if contributors_string else []
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.contributors.clear()
        for muid in contributors_muid:
            user = User.objects.get(muid=muid.strip())
            instance.contributors.add(user)
        instance.save()
        return instance