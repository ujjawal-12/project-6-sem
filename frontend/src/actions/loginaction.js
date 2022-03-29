const callsettokenaction = (token)=>{
    return { type : "settoken", paylod:token}
}

const callremovetokenaction = (val)=>{
    return { type : "removetoken",paylod:val}
}

export {callsettokenaction,callremovetokenaction};