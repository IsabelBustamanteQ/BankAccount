//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total=0;
    this.accountOpen=false;
  }

  open() {
    this.accountOpen=true;
  }

  close() {
    if(this.accountOpen==true)
    {
      this.accountOpen=false;
    }
    else
    {
      throw new ValueError();
    }
    
  }

  deposit(amount) {
    if(this.accountOpen==true)
    {
      this.total+=amount;
    }
    else
    {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if(this.accountOpen==true)
    {
      this.total-=amount;
    }
    else
    {
      throw new ValueError();
    }
  }

  get balance() {
    if(this.accountOpen==true)
    {
      return this.total;
    }
    else
    {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
