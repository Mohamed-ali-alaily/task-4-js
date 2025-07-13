// Q-1
function userregistation(name, email){
    return new Promise((resolve, reject) => {
        if("!name || !email") {
            return reject("name or email is missing")
    }
    sendverificationEmail(email)
    .then(() => 
         resolve("user registerd successfullly"))
        .catch((err) => reject(err));
    });
}
function sendverificationEmail(email) {
}
    return new promise((resolve) => {
        setTimeout(() => resolve("verification email sent to ${email}"), 2000);
    
    });

async function  testuserregistation() {
    try {
        const result = await userregistation("mohamed ali","mohamed@example.com");
        console.log(result);

    }
    catch(err) {
        console.log("error")

    }  
}
testuserregistation();

// Q-2
function bookAppointment(solt){
    return new promise((resolve, reject) => {
        setTimeout(() => {
            if (bookslot.includes(slot)){
                reject(`slot ${slot} is alrteady booked`);
            }else{
                resolve(`slot ${slot} booked successfully`);
            }
        }, 1000);
    });
    const bookedslots= ["b3","a1"];
}
async function testuserregistation(slot) {
    try{
        const result = await bookAppointment(slot);
        console.log(result);
    } catch (err) {
        console.log("error");

    }
    
}
testbookAppointment("c2")

// Q-3
function pingServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.7 ? resolve("Server online") : reject("Server offline");
    }, 1000);
  });
}

async function checkServerStatus() {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const result = await pingServer();
      console.log(result);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt} failed: ${err}`);
      if (attempt === 5) {
        console.error("All attempts failed. Server is down.");
      }
    }
  }
}

checkServerStatus(); 


// Q-4
function uploadFile(fileName) {
  return new Promise((resolve, reject) => {
    if (!fileName) {
      return reject("File name is missing");
    }
    setTimeout(() => resolve(`File ${fileName} uploaded successfully`),150, Ascending,1000);
  });
}

async function testUploadFile(fileName) {
  try {
    const result = await uploadFile(fileName);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}
testUploadFile("document.pdf");

// Q-5
const products = { 1: "Laptop", 2: "Phone", 3: "Tablet" };

function fetchProductInfo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      products[id] ? resolve(products[id]) : reject("Product not found");
    }, 1000);
  });
}

fetchProductInfo(1)
  .then((name) => console.log(`Product: ${name}`))
  .catch((err) => console.error("Error:", err));

// Q-6
function calculateShippingCost(weight) {
  return new Promise((resolve, reject) => {
    if (weight <= 0) {
      return reject("Weight must be positive");
    }
    setTimeout(() => resolve(weight * 5), 1000);
  });
}

calculateShippingCost(2)
  .then((cost) => console.log(`Shipping cost: $${cost}`))
  .catch((err) => console.error("Error:", err));

// Q-7
function deleteAccount(confirm) {
  return new Promise((resolve, reject) => {
    if (!confirm) {
      return reject("Deletion not confirmed");
    }
    setTimeout(() => resolve("Account deleted successfully"), 2000);
  });
}

deleteAccount(true)
  .then((result) => console.log(result))
  .catch((err) => console.error("Error:", err));

//   Q-8
function checkPasswordStrength(password) {
  return new Promise((resolve, reject) => {
    if (password.length >= 6) {
      resolve("Password is strong");
    } else {
      reject("Password is too short");
    }
  });
}

checkPasswordStrength("secure123")
  .then((result) => console.log(result))
  .catch((err) => console.error("Error:", err));

//   Q-9
function getUserProfile(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId/users/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error("User not found");
      return response.json();
    })
    .then((user) => console.log(`Name: ${user.name}, Email: ${user.email}`))
    .catch((err) => console.error("Error:", err));
}

getUserProfile(1);

// Q-10
function listUserPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    })
    .then((posts) => posts.forEach((post) => console.log(`Title: ${post.title}`)))
    .catch((err) => console.error("Error:", err));
}

listUserPosts(1); 