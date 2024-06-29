from django.urls import path
from api.views import *

urlpatterns = [
    path('weekly-leaderboard/', WeeklyLeaderboardAPIView.as_view(), name='weekly-leaderboard'),
    path('monthly-leaderboard/', MonthlyLeaderboardAPIView.as_view(), name='monthly-leaderboard'),
    path('overall-leaderboard/', OverallLeaderboardAPIView.as_view(), name='overall-leaderboard'),
    path('project/<str:pk>', ProjectDetailAPIView.as_view(), name='project-detail'),
    path('projects/', ProjectsAPIView.as_view(), name='projects'),
    path('project-vote/', ProjectVoteAPI.as_view(), name='project-vote'),
    path('project-vote/<str:pk>/', ProjectVoteAPI.as_view(), name='project-vote-update'),
    path('project-comment/', ProjectCommentAPI.as_view(), name='project-comment'),
    path('project-comment/<str:pk>/', ProjectCommentAPI.as_view(), name='project-comment-update'),
]