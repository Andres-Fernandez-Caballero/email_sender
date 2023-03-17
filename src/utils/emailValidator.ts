export const  isNotValidEmail = (email: string):boolean => {
    const reEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   return email.match(reEmail) === null;
}