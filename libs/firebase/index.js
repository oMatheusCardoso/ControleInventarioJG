import * as firebase from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

import {
	getStorage,
	ref as refStorage,
	uploadBytes,
	getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

import {
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import { 
	getDatabase, 
	ref, 
	get,
	child,
	set,
	orderByChild,
	onValue,
	query,
	equalTo
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyDeeqdP5trIFnXVirZL1vEcFA6X6mil5Jw",
	authDomain: "qrcodejg.firebaseapp.com",
	databaseURL: "https://qrcodejg-default-rtdb.firebaseio.com",
	projectId: "qrcodejg",
	storageBucket: "qrcodejg.appspot.com",
	messagingSenderId: "583377091478",
	appId: "1:583377091478:web:c3ec5d80ae561f76bdbbb7",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = refStorage(storage);
const auth = getAuth(app);
const db = getDatabase(app, firebaseConfig.databaseURL);
const dbref = ref(db);




function FindData(code, db) {
	const data = get(child(dbref, `${db}/${code[0].toUpperCase() + code.substring(1).trim()}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot);

				return snapshot.val();
			} else {
				alert("Código não encontrado!");
			}
		})

		.catch((error) => {
			alert(error);
		});

		
		return data;
}

function FindDataByType(code, database, setData) {
	const data = query(ref(db, `${database}`), orderByChild('Tipo'), equalTo(code[0].toUpperCase() + code.substring(1).trim()));	

	onValue(data, (Result) => {
		setData(Result.val());
		
	})

}


function SetData(Item, dadosDB,) {
	set(child(dbref, `Brindes/${Item[0].toUpperCase() + Item.substring(1).trim()}`), {
		...dadosDB,
		user : {
			uid: auth.currentUser.uid,
			email: auth.currentUser.email,
			// data: dataAtual,
		},
	})
	console.log(data);
}

export {
	auth,
	dbref,
	FindData,
	onAuthStateChanged,
	getStorage,
	refStorage,
	storage,
	storageRef,
	uploadBytes,
	getDownloadURL,
	SetData,
	sendPasswordResetEmail,
	FindDataByType,
	orderByChild,
	onValue
}


