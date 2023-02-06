const user: string = "Su Aye Aung";
console.log(user)

interface Props {
    num1: number;
    num2: number;
}
const calculate = ({num1, num2}: Props):number => {
    return num1 * num2;
}
calculate({num1: 5, num2: 5});
// ==================================================================================


interface Props2{
    num1: number;
    num2?: number;  
    user1: {name: string, age: number, email: string};
  }
  const ForuserEmail = (params: Props2):any => {
    if(params.num2){
       return params.num1 * params.num2;
    }else{
      const userEmail = params.user1.email;
      console.log(userEmail)
      return params.num1;
    }
}
ForuserEmail({num1: 2, user1: {name: "Alex", age: 15, email: "alex566@gmail.com"}})


// ==========================================================================
interface User{
    name: string;
    email: string;

}
interface Personal{
   num3: number;
   num4?: number;
   users: User[];
   fetchData: (url:string) => void;
}
const data = (url:string) => {
    console.log(url);
}
const person = (params: Personal): any  => {
    if(params.num4){
        return params.num3 * params.num4;
    }
    const userObject = params.users[0];
    console.log(userObject);

    const datas = params.fetchData("http://localhost:3000")
    console.log(datas)
    return params.num3;
}
person({num3: 5, users: [{name: "Aye Aye", email: "ayeaye@gmail.com"}], fetchData: data});
