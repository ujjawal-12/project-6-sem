
let initialstate = {token:""}

function loginreducer(state=initialstate,action){
  switch (action.type){
      case "settoken" : return{token:action.paylod};
      case "removetoken": return{token:action.paylod};
      default : return state;
  }
}

export default loginreducer;