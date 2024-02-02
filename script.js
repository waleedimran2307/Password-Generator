class Password {
  //constructor for methods
  constructor() {
    this.funnycase = "";
    this.weakcase = "";
    this.strongcase = "";
    this.superstrongcase = "";
  }

  //funny password
  funnycasepass(len) {
    let arr = [
      "LMAO!",
      "Hello World",
      "HeHeHe",
      "Lol",
      "Pakistan Zindabad",
      "Kasy Ana hoa!",
      "Warr Gyaa",
      "Ghabrana nahi hay",
      "PK hay kiyaa",
      "Bap Ko mat Sikhaa!",
    ];
    for (var i = 0; i < arr.length; i++) {
      this.funnycase = arr[Math.floor(Math.random() * arr.length)];
    }

    document.getElementById("spanoutput").innerHTML =
      `This is funny password:` + "<br>" + `${this.funnycase}`;
    return this.funnycase;
  }

  //weak password class
  weakcasepass(len) {
    let Upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerletters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*";

    if (UpCase.checked && lwCase.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.weakcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    } else if (UpCase.checked && num.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.weakcase += numbers[Math.floor(Math.random() * numbers.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    } else if (UpCase.checked && spchar.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.weakcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    } else if (lwCase.checked && num.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.weakcase += numbers[Math.floor(Math.random() * numbers.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    } else if (lwCase.checked && spchar.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.weakcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    } else if (num.checked && spchar.checked) {
      for (var i = 0; i < len; i += 2) {
        this.weakcase += numbers[Math.floor(Math.random() * numbers.length)];
        this.weakcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.weakcase = this.weakcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is weak password: ` + "<br>" + ` ${this.weakcase} `;
      return this.weakcase;
    }
  }

  //Strong password class
  strongcasepass(len) {
    let Upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerletters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*";

    if (UpCase.checked && lwCase.checked && num.checked) {
      for (var i = 0; i < len; i += 3) {
        this.strongcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.strongcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.strongcase += numbers[Math.floor(Math.random() * numbers.length)];
      }
      this.strongcase = this.strongcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is strong password: ` + "<br>" + ` ${this.strongcase} `;
      return this.strongcase;
    } else if (UpCase.checked && lwCase.checked && spchar.checked) {
      for (var i = 0; i < len; i += 3) {
        this.strongcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.strongcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.strongcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.strongcase = this.strongcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is strong password: ` + "<br>" + ` ${this.strongcase} `;
      return this.strongcase;
    } else if (UpCase.checked && num.checked && spchar.checked) {
      for (var i = 0; i < len; i += 3) {
        this.strongcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.strongcase += numbers[Math.floor(Math.random() * numbers.length)];
        this.strongcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.strongcase = this.strongcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is strong password: ` + "<br>" + ` ${this.strongcase} `;
      return this.strongcase;
    } else if (lwCase.checked && num.checked && spchar.checked) {
      for (var i = 0; i < len; i += 3) {
        this.strongcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.strongcase += numbers[Math.floor(Math.random() * numbers.length)];
        this.strongcase += symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.strongcase = this.strongcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        `This is strong password: ` + "<br>" + ` ${this.strongcase} `;
      return this.strongcase;
    }
  }

  //  SuperStrong password class
  superstrongcasepass(len) {
    let Upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerletters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*";

    if (UpCase.checked && lwCase.checked && num.checked && spchar.checked) {
      for (var i = 0; i < len; i += 4) {
        this.superstrongcase +=
          Upperletters[Math.floor(Math.random() * Upperletters.length)];
        this.superstrongcase +=
          lowerletters[Math.floor(Math.random() * lowerletters.length)];
        this.superstrongcase +=
          numbers[Math.floor(Math.random() * numbers.length)];
        this.superstrongcase +=
          symbols[Math.floor(Math.random() * symbols.length)];
      }
      this.superstrongcase = this.superstrongcase.slice(0, len);
      document.getElementById("spanoutput").innerHTML =
        ` This is Super strong password:` +
        "<br>" +
        ` ${this.superstrongcase} `;
      return this.superstrongcase;
    }
  }
}

// Variables
let UpCase = document.getElementById("upper");
let lwCase = document.getElementById("lower");
let num = document.getElementById("numbers");
let spchar = document.getElementById("sp");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");

// Btn Action
btn.addEventListener("click", () => {
  // Prompt & Obj creation
  let userLength = prompt("Enter length value");
  let PasswordGenerator = new Password(userLength);

  if (userLength <= 0) {
    alert("Please Enter positive number of length");
  } else if (
    (UpCase.checked && !lwCase.checked && !num.checked && !spchar.checked) ||
    (lwCase.checked && !UpCase.checked && !num.checked && !spchar.checked) ||
    (num.checked && !UpCase.checked && !lwCase.checked && !spchar.checked) ||
    (spchar.checked && !UpCase.checked && !num.checked && !lwCase.checked)
  ) {
    pass.value = PasswordGenerator.funnycasepass(userLength);
  } else if (
    (UpCase.checked && lwCase.checked && !num.checked && !spchar.checked) ||
    (UpCase.checked && num.checked && !lwCase.checked && !spchar.checked) ||
    (UpCase.checked && spchar.checked && !lwCase.checked && !num.checked) ||
    (lwCase.checked && num.checked && !spchar.checked && !UpCase.checked) ||
    (lwCase.checked && spchar.checked && !num.checked && !UpCase.checked) ||
    (num.checked && spchar.checked && !UpCase.checked && !lwCase.checked)
  ) {
    pass.value = PasswordGenerator.weakcasepass(userLength);
  } else if (
    (UpCase.checked && lwCase.checked && num.checked && !spchar.checked) ||
    (UpCase.checked && lwCase.checked && spchar.checked && !num.checked) ||
    (lwCase.checked && num.checked && spchar.checked && !UpCase.checked) ||
    (UpCase.checked && num.checked && spchar.checked && !lwCase.checked)
  ) {
    pass.value = PasswordGenerator.strongcasepass(userLength);
  } else if (
    UpCase.checked &&
    lwCase.checked &&
    num.checked &&
    spchar.checked
  ) {
    pass.value = PasswordGenerator.superstrongcasepass(userLength);
  } else {
    alert("Please select any one category!");
  }
});
