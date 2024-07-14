export const useLSQUser = () => {
  const qUser = localStorage.getItem('qUser');
  const setQUser = (qUser: string) => localStorage.setItem('qUser', qUser);

  return { qUser, setQUser };
};
