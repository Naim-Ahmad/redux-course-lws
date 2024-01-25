/**
 * "Add Another Match" বাটনে ক্লিক করলে নতুন Match যোগ হবে এবং Inital State হবে 0। প্রতিটি Match এর মধ্যে Delete আইকন, Increment & Decrement ইনপুট ফিল্ড এবং Total স্কোর থাকবে। প্রতিটি Match আলাদা আলাদা State management করবে।

✓ একদম প্রথম বারে initial state হিসেবে একটি Match থাকবে এবং তার initial value হবে 0

✓ Increment এবং Decrement ইনপুট ফিল্ড এ value নিয়ে কী-বোর্ড এর Enter প্রেস করলে Match এর স্কোর Increment/Decrement ফিল্ড অনুযায়ী বাড়াবে বা কমবে। তবে অবশ্যই কী-বোর্ডের Enter বাটন টিপলে এই কাজ টি করবে।

✓ Decrement করতে থাকলে Total এর ভ্যালু কখনই শূন্য এর নিচে অর্থাৎ মাইনাস হবে না। ধরুন, Total এ ভ্যালু আছে 10, আপনি Decrement করলেন 15. টোটালের ভ্যালু হবে 0।

✓ Reset বাটন এ ক্লিক করলে সব Match এর স্কোর শূন্য (0) তে রিসেট হয়ে যাবে। উল্লেখ্য যে, যত গুলো ম্যাচ তৈরি করা হয়েছিল, ততগুলোই থাকবে শুধু মাত্র তাদের Total ভ্যালু Reset হয়ে শূন্য হয়ে যাবে।
*/

const addMatch = document.querySelector(".lws-addMatch");
const match = document.querySelector(".match");
const matchContainer = document.querySelector(".all-matches");
const incrementForm = document.querySelector(".incrementForm");
const decrementForm = document.querySelector(".decrementForm");
const incDec = document.querySelector(".inc-dec");
const resetEl = document.querySelector('.lws-reset')

const initialState = [{ name: "Match 1", result: 120 }];

// reducer function
function reducerFunction(state = initialState, action) {
  if (action.type === "incrementForm") {
    const cloneState = state.map((obj) => {
      if (obj.name.toLowerCase() === action.payload.name) {
        obj.result += action.payload.result;
        return obj;
      } else {
        return obj;
      }
    });
    return cloneState;
  }else if(action.type === 'decrementForm'){
    const cloneState = state.map((obj) => {
        if (obj.name.toLowerCase() === action.payload.name) {
          obj.result > action.payload.result ? obj.result -= action.payload.result : obj.result = 0;
          return obj;
        } else {
          return obj;
        }
      });
      return cloneState
  } 
  else if (action.type === "addMatch") {
    return [
      ...state,
      {
        name: `Match ${state.length + 1}`,
        result: 0,
      },
    ];
  }else if(action.type === 'reset'){
    return [...initialState]
  }
}
// create store
const store = Redux.createStore(reducerFunction);

// action dispatch
matchContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const matchName =
  e.target.parentElement.previousElementSibling.children[1].innerText;
  const className =  e.target.className;
  const result = Number(e.target.children[1].value)
  
  e.target.reset();
  
  store.dispatch({
    type: className,
    payload: {
      name: matchName.toLowerCase(),
      result,
    },
  });


});

addMatch.addEventListener("click", () => {
  store.dispatch({
    type: "addMatch",
  });
});

resetEl.addEventListener('click', ()=>{
    store.dispatch({
        type: 'reset',
    })
})

function render() {
  matchContainer.innerHTML = "";
  const updateState = store.getState();
  updateState.forEach((state) => {
    const cloneMatch = match.cloneNode(true);
    const matchNumberEl = cloneMatch.childNodes[1].lastElementChild;
    const resultEl = cloneMatch.childNodes[5].children[0];

    matchNumberEl.innerText = state.name;
    resultEl.innerText = state.result;

    matchContainer.appendChild(cloneMatch);
  });

}

store.subscribe(render);

