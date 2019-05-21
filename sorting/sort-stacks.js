var stack = [2,3,1];

function sortStack(stack) {
    if (stack == null) {
        return stack; 
    }

    var newStack = [];
    newStack.push(stack.pop());//Our new stack starts with last element in the parameter stack 

    while (stack.length > 0) {//While our parameter stack still has elements in it 
        var temp = stack.pop();//Store the top value of our stack for comparison against top of newStack 
        while (newStack.length > 0 && temp > newStack[newStack.length-1]) {
            stack.push(newStack.pop());//If so push it back onto the old stack 
        }
        newStack.push(temp);//If temp is smaller 
        console.log("temp", temp)
        console.log("newStack", newStack)
        console.log("stack", stack)

    }

    return newStack;
}   

sortStack(stack);