/**
 * Created with IntelliJ IDEA.
 * User: ashishsri
 * Date: 15/05/2014
 * Time: 16:30
 * To change this template use File | Settings | File Templates.
 */

app.controller("MainController", function($scope,$http){
    $scope.inputValue = "this is the value";
    $scope.selectedPerson = 0;
    $scope.selectedGenre = "";
    $scope.url = "http://localhost:8080/getResultJson?callback=JSON_CALLBACK";
    $scope.data = "";
    $scope.scenarios = null;
    $scope.selectedScenario = null;
    $scope.scenarioResult = "Passed";
    $scope.people = [
        {
            id: 0,
            name: 'Leon',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'Rock',
                'Metal',
                'Thrash Metal',
                'Heavy Metal'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Allyce',
            music: [
                'Pop',
                'RnB',
                'Hip Hop'
            ],
            live: true
        }
    ];
    $scope.addNew = function(newPerson) {
        if (newPerson != null && newPerson != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: newPerson,
                live: true,
                music: []
            });
        }
    };
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };

    $scope.fetch =  function(){
        $scope.scenarios=null;
        $scope.selectedScenario = null;
        $http({
            method: "GET",
            url:$scope.url
        }).success(function(data, status){
            $scope.status = status;
            $scope.scenarios  = data;
        }).
           error(function(data, status){
                $scope.data = "Request failed";
                $scope.status = status;
            });
    };
    $scope.clear =  function(){
       $scope.data = ""
    };

    $scope.getScenarioResult = function(){
        $scope.scenarioResult = "Passed";
        angular.forEach($scope.selectedScenario.steps,function(step){
            if(step.result.status == 'failed'){
                 $scope.scenarioResult = "Failed";
            }
        })
    };
});
