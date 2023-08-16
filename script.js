// async function fetchUselessFacts() {
//     let factContainer = document.getElementById('factContainer');
//     factContainer.innerHTML = 'Loading...';
  
//     try {
//       let response1 = await fetch('https://zenquotes.io/api/quotes');
//       let data1 = await response1.json();
//       let fact1 = data1.text;
  
//       let response2 = await fetch('https://api.api-ninjas.com/v1/facts?limit=');
//       let data2 = await response2.json();
//       let fact2 = data2.data;
  
//       factContainer.innerHTML = `
//         <div>
//           <h3>Useless Fact:</h3>
//           <p>${fact1}</p>
//         </div>
//       `;
//     } catch (error) {
//       factContainer.innerHTML = 'Failed to fetch useless facts.';
//     }
//   }

async function fetchUselessFacts() {
  const url = 'https://zenquotes.io/api/today';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
