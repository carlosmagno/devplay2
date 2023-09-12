//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs , query, where} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
//import {  } from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
//import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBvzRjk0gSalWDP2hfmZJluOsVUYCsKafg",
    authDomain: "codeplay-br.firebaseapp.com",
    projectId: "codeplay-br",
    storageBucket: "codeplay-br.appspot.com",
    messagingSenderId: "531957206062",
    appId: "1:531957206062:web:bbfdf6d6ba765ceb9ce3bf",
    measurementId: "G-RBZNST1GPY"
};
 
const app = initializeApp(firebaseConfig);
//const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//console.log(app)
//import { getAuth } from "https://www.gstatic.com/firebasejs/ui/9.9.4/firebase-ui-auth.js";
//import { getAuth } from "firebase/auth";
//const auth = firebase.auth();
//const auth = getAuth(app);

//var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// btnLogin.addEventListener('click', startUI);

// function startUI(){
//     //console.log(auth)
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
// }


//console.log("db: ", db)


//Adicionar um novo documento especificando um ID usamos o método set()
    // await setDoc(doc(db, "Cidades", "Goiana"), {
    //   nome: "Goiana",
    //   estado: "PE",
    //   Região: "Brasil"
    // });

//Adicionar um novo documento sem especificar um ID, deixando o Cloud Firestore gerar um automaticamente, usamos método add()


// async function addProject2(){
//     try {
//         const docRef = await addDoc(collection(db, "Projetos", NovoProjeto.value), {
//         HTML: "Escreva seu código HTML",
//         CSS: "Escreva seu código CSS",
//         JS: "Escreva seu código JavaScript",
//         });
//         console.log("Documento gravado com ID: ", docRef.id);
//     } catch (e) {
//         console.error("Erro ao adicionar documento: ", e);
//     }
// }



    // const citiesRef = collection(db, "cities");
    
    // await setDoc(doc(citiesRef, "SF"), {
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 860000,
    //     regions: ["west_coast", "norcal"] });
    // await setDoc(doc(citiesRef, "LA"), {
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    // await setDoc(doc(citiesRef, "DC"), {
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    // await setDoc(doc(citiesRef, "TOK"), {
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    // await setDoc(doc(citiesRef, "BJ"), {
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });

//Receber um documento
//No exemplo a seguir, mostramos como recuperar o conteúdo de um único documento usando get()



//Recuperar todos os documentos em uma coleção
//Além disso, é possível recuperar todos os documentos de uma coleção, basta omitir o filtro where() completamente:



