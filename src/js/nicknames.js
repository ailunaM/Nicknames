export class Validator {
  constructor() {}
  validateUsername(nicknames) {
    const re =
      /^(?![0-9])(?!.*\d$)(?!.*\d{3,})(?![0-9])(?![0-9]$)(?![-_])(?!.*[-_]$)[a-zA-Z0-9-_]+$/;
    return re.test(nicknames);
  }
}
const user = new Validator();
console.log(user.validateUsername("u_ser-n3me"));
