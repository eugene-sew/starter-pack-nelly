const uname = prompt("what shall I call you?");

const getTimeDay = () => {
  const d = new Date();
  const h = d.getUTCHours();
  console.log(h);
  let greet;
  if (h >= 17) {
    greet = "Evening";
  } else if (h >= 12) {
    greet = "Afternoon";
  } else if (h >= 0) {
    greet = "Morrning";
  } else {
    greet = "Day";
  }
  return greet;
};

getTimeDay();

const text = ` >> Good ${getTimeDay()} ${uname ? uname : "dear"},
            <br />
            <br />
            >> You'll find a list of cards containing direct download links for
            the various software we need to get you started. In the said cards,
            you'll find the reason for each software
            <br />
            <br />
            >> The coding community welcomes you :)
            <br />
            <br />

            `;
const form = `<form onsubmit="hasSubmit()">
              <div>
                <label> >> type "I agree" to continue</label>
                <br />
                <div class="flex flex-row">
                  <label>></label>

                  <input
                    type="text"
                    name=""
                    id="answer"
                    class="bg-transparent border-none outline-none px-3 focused"
                    autofocus
                  />
                </div>
              </div>
            </form>`;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  currentText = text;
  letter = currentText.slice(0, ++index);

  document.querySelector(".teffect").innerHTML = letter;
  setTimeout(type, 50);
}
// setTimeout(() => {
//   document.querySelector(".teffect").innerHTML += form;
// }, 2300);
