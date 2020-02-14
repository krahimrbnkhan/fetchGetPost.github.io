const url = "https://ghibliapi.herokuapp.com/people";

// Target main element
const main = document.getElementById("main");

// Loading Placeholder
main.innerHTML = "<p>Loading...";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    main.innerHTML = listOfNames(data);
  });

listOfNames = data => {
  const names = data
    .map(person => {
      return `<li>${person.name}</li>`;
    })
    .join("\n");
  return `<ul>${names}</ul>`;
};
