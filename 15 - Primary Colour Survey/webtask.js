/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {

  //For some reason, a tuple is required here? In this order?
  context.storage.get((getError, data) => {
    if (getError) cb(getError);
    
    data = data || {"red": 0, "blue" : 0, "yellow" : 0};
    updateData(data, context.query.colour);
    
    //But no tuple here? I can also use optional flags, such as {force: 1}?
    //How is the data defined here not conflicting with the other data, because of tuple?
    context.storage.set(data, setError => {
      if (setError) return cb(setError);
      cb(null, data);
    });
  });
};

function updateData(data, vote){
  if (vote === "red") {
    data.red += 1;
  } else if (vote === "blue"){
    data.blue += 1;
  } else if (vote === "yellow") {
    data.yellow += 1;
  } 
  return data;
}
