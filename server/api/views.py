from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Stories
from .Serializers import StoriesSerializer
from rest_framework import status



@api_view(['GET'])
def home(request):
    
    print(request.method)
    

    return Response({'name':'david'})

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    if request.method == 'GET':
        return Response({'message': 'Hello, this is a get request'})
    elif request.method == 'POST':
        return Response({'message': 'Hello, this is a post request'})
    
    return Response({'Info':'Welcome'})

@api_view(['GET'])
def all_stories(request):
    stories = Stories.objects.all()
    serializer = StoriesSerializer(stories, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])  
@permission_classes([IsAuthenticated])
def create_story(request):
    if request.method == 'GET':
        return Response({'message': 'provide Information'})
    elif request.method == 'POST':
        story = request.data
        author = request.user
        serializer = StoriesSerializer(data=story, many=False)
        if serializer.is_valid():
            serializer.save(author=author)
            return Response({
                'message': 'Story Created Successfully!',
                'status' : True
            }, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response({
                'message': 'Something Went Wrong',
                'status' : False
            }, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE']) 
@permission_classes([IsAuthenticated]) 
def single_story(request, id): 
    print(request.method)
    if request.method == 'GET':
        story = Stories.objects.get(id=id)
        serializer = StoriesSerializer(story, many=False)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        story = Stories.objects.get(id=id)
        serializer = StoriesSerializer(instance=story,  data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Story Updated Successfully!',
                'status' : True
                
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'message': 'Unable to update Story',
                'status': False
                }, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        story = Stories.objects.get(id=id)
        story.delete()
        return Response({
            'message': 'Story Deleted Successfully',
            'status': True
        }, status=status.HTTP_200_OK)
    
            
    

@api_view(['GET'])   
@permission_classes([IsAuthenticated])
def user_stories(request):
    author = request.user
    all_user_stories = Stories.objects.filter(author=author)
    serializer = StoriesSerializer(all_user_stories, many =True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)