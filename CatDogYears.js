var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears==1){
      var catYears = 15;
      var dogYears = 15;
    }
    else if(humanYears==2){
      var catYears = 15+9
      var dogYears = 15+9
    }
    else{
      var catYears = 24 + ((humanYears-2)*4)
      var dogYears = 24 + ((humanYears-2)*5)
      
    }
    return [humanYears,catYears,dogYears];
  }

//   describe("Example Tests", function() {

//     it("one", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//     });
  
//     it("two", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//     });
  
//     it("ten", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//     });
  
//   });
  
  