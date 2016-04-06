var app = angular.module('app', [])

app.controller('projectController', function($scope, $http){

  $scope.languages = []
  $scope.repos = undefined

  $http.get('https://api.github.com/users/MichaelARoberts/repos').then(function(reposResponse){
    $scope.repos = reposResponse.data

    for (repo of $scope.repos){
      $http.get('https://api.github.com/repos/MichaelARoberts/'+ repo.name +'/languages').then(function(langsResponse){
        $scope.languages.push(langsResponse.data)
      })
    }
  })
})

app.controller('aboutController', function($scope){
  $scope.education = [
    {
      name: 'Champlain College',
      graddate : '2018',
      degree: 'BS in Computer and Digital Forensics',
      minor: 'Minor in Computer Science',
      classes: [
        'Forensic Tool Evaluation',
        'Anti-Forensics and Network Forensics',
        'Intro to Networking',
        'Systems Software',
        'Criminal Law',
        'Intro to Programming',
        'Cyber Crime and Digital Investigation',
        'Law of Digtial Evidence',
        'Intro to Computer Theory',
        'Intro to Digital Forensics'
      ]
    }
  ]
  $scope.career = [
    {
      name : 'Icila',
      position : 'CTO',
      start_date : 'February 2016',
      end_date : 'present',
      desc : [
        'Developed RESTful API and iOS prototypes',
        'Created Tech-Roadmap',
        'Lead testing of numerous iterations of software'
      ]
    },
    {
      name : 'Leahy Center for Digital Investigation',
      position : 'Intern, Research Assistant 1',
      start_date : 'January 2015',
      end_date : 'present',
      desc : [
        'Lead talks at Schools about digital security, and digital citizenship',
        'Developed games in Unity3D to teach youth about digital citizenship',
        'Edited movies, audio, and photos for public relations',
        'Analyzed decompiled software',
        'Helped develop HIPAA compliance'
      ]
    }
  ]
})

app.controller('resourcesController', function($scope){
  $scope.frameworks = [
    {
      name: 'JQuery',
      site: 'https://jquery.com/'
    },
    {
      name: 'AngularJS',
      site: 'https://angularjs.org/'
    },
    {
      name: 'Bootstrap',
      site: 'http://getbootstrap.com/'
    },
    {
      name: 'Animate.CSS',
      site: 'https://daneden.github.io/animate.css/'
    },
    {
      name: 'Express',
      site: 'http://expressjs.com/'
    },
    {
      name: 'Flask',
      site: 'http://flask.pocoo.org/'
    }
  ]

})
