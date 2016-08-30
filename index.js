function theBeatlesPlay(musicians, instruments){
  var beatlesArray=[];
  for (var i=0;i<musicians.length;i++){
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return beatlesArray;
}

function johnLennonFacts(facts){
  var excitedLenonFacts=[];
  var i=0;
  while (i<facts.length) {
    excitedLenonFacts.push(facts[i]+"!!!");
    i++;
  };
  return excitedLenonFacts;
}

function iLoveTheBeatles(n){
  var loveArray=[];
  do {
    loveArray.push("I love the Beatles!");
    n++;
  } while (
    n<15
  );
  return loveArray;
}
