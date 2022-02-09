// Code here

type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

function getEmails(sentence: CustomerType[]): string[] {
  const emailResult: string[] = [];
  for (let index = 0; index < sentence.length; index++) {
    const arrayIndex = sentence[index];
    const emailString = arrayIndex.email
    emailResult.push(emailString);
  }
  return emailResult;
}

export { getEmails}
