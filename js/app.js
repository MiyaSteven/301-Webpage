'use strict'


var games = ['1', '2', '3', '4', '5', '6', '7', '8'];
var playerData = document.getElementById('player-data')

function Players (name, age, gender, gold, placement) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.goldArray = [];
    this.averagePlacement = placement;

    this.render = function () {       
        var trElement = document.createElement('tr')

        var tdName = document.createElement('td')
        var tdAge = document.createElement('td')
        var tdGender = document.createElement('td')
        var tdGoldArray = document.createElement('td')
        var tdAveragePlacement = document.createElement('td')
    
        tdName.textContent = this.name;
        tdAge.textContent = this.age;
        tdGender.textContent = this.gender;
        tdGoldArray.textContent = this.goldArray;
        tdAveragePlacement.textcontent = this.averagePlacement;

        trElement.append(tdName);
        trElement.append(tdAge);
        trElement.append(tdGender);  
        trElement.append(tdGoldArray);
        trElement.append(tdAveragePlacement);
        playerData.append(trElement);

        for(var i=0; i < games.length; i++) {
            tdElement = document.createElement('td')
            var totalGold = this.getAverageGold();
            sum += totalGold;
            this.goldArray.push(totalGold);
            tdAveragePlacement.textContent = totalGold;
            trElement.append(tdElement);
        }
        playerData.append(trElement);
    }
};

Players.render()