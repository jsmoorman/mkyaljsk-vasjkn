app.controller('PostController', ['$scope', function($scope) {
  $scope.posts =
  [
      {
          title: 'Schrödinger’s Ignorance',
          subtitle: 'Is ignorance bliss?',
          date: 'September 29, 2015',
          author: 'Jeremy Moorman',
          link: 'posts/Schrodinger.html',
          likes: 0
      }
  ]
  $scope.plusOne = function(index) {
    $scope.posts[index].likes += 1;
  };
}]);
