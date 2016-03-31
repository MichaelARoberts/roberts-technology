var projectApp = angular.module('projectApp', [])

projectApp.controller('projectController', function($scope, $http){

  $scope.languages = []
  $scope.repos = undefined

  $http.get('https://api.github.com/users/MichaelARoberts/repos').then(function(reposResponse){
    $scope.repos = reposResponse.data
    console.log($scope.repos)
    
    for (repo of $scope.repos){
      $http.get('https://api.github.com/repos/MichaelARoberts/'+ repo.name +'/languages').then(function(langsResponse){
        $scope.languages.push(langsResponse.data)
        console.log($scope.languages)
      })
    }


  })
})