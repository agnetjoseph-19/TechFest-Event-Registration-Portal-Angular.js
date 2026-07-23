var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    // Dashboard Variables

    $scope.eventName = "TechFest 2026";
    $scope.organizer = "University Administration";
    $scope.organizerColor = "blue";

    $scope.participantCount = 2;

    $scope.eventDate = new Date();

    $scope.registrationFee = 500;

    $scope.eventId = "EVT1001";

    $scope.isReadOnly = true;

    // Participant List

    $scope.participants = [

        {
            name: "Alice",
            email: "alice@student.edu",
            phone: "9876543210"
        },

        {
            name: "Bob",
            email: "bob@student.edu",
            phone: "9876501234"
        }

    ];

    // Show / Hide Participants

    $scope.showParticipants = true;

    $scope.toggleParticipants = function () {

        $scope.showParticipants = !$scope.showParticipants;

    };

    // Add Participant Count

    $scope.addParticipant = function () {

        $scope.participantCount++;

    };

    // Categories

    $scope.categories = [

        "AI",
        "Web Development",
        "Cyber Security",
        "Cloud Computing",
        "Robotics",
        "IoT"

    ];

    $scope.selectedCategory = $scope.categories[0];

    // Registration Form Model

    $scope.newParticipant = {};

    // Form Submission

    $scope.submitRegistration = function () {

        if ($scope.registrationForm.$valid) {

            $scope.participants.push({

                name: $scope.newParticipant.name,

                email: $scope.newParticipant.email,

                phone: $scope.newParticipant.phone

            });

            $scope.participantCount = $scope.participants.length;

            alert("Participant Registered Successfully!");

            $scope.newParticipant = {};

            $scope.registrationForm.$setPristine();

            $scope.registrationForm.$setUntouched();

        }

    };

});