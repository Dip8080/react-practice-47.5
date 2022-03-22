const addition = (num1,num2)=>{
    const add = num1+num2;
    return add;
}

const multiplicaton =(num1, num2)=>{
    const mul = num1*num2;
    return mul;
}
const devision = (num1,num2)=>{
    const div = num1/num2;
    return div;
}
const vagsesh = (num1,num2)=>{
    const vgsheh = num1%num2;
    return vgsheh;
}

const calculateTotalArray= arr =>{
    const reducer= (x,y)=>x+y.age;
   const total= arr.reduce(reducer,0)
   return total;
}

export {addition,multiplicaton,devision,vagsesh,calculateTotalArray as reducer} ;