function runSequntial(tasks,delay){
    let result=[];
    return tasks.reduce((promise,task)=>{
        return promise.then(()=> task()).then(res=>{
            result.push(res);
            return new Promise(resolve=>setTimeout(resolve,delay));
        });
    },Promise.resolve()).then(()=>result).catch(err=>console.error("task failed",err));
}
const task1=()=>Promise.resolve("task 1 completed");
const task2=()=>Promise.resolve("task 2 completed");
const task3=()=>Promise.resolve("task 3 completed");
runSequntial([task1,task2,task3],1000).then(results=>console.log(results));