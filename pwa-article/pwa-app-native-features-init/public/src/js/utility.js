
// TODO: Change this with your own local IP (either localhost/127.0.0.1) or the IP assigned by the phone hot spot
const SERVER_URL = 'http://localhost:3000';
const API_URL = `${SERVER_URL}/selfies`;

// ADD dbPromise HERE !


const writeData = (storeName, data) => {
    return dbPromise
        .then(db => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.put(data);
            return tx.complete;
        });
};

const readAllData = storeName => {
    return dbPromise
        .then(db => {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            return store.getAll();
        });
};

const clearAllData = storeName => {
    return dbPromise
        .then(db => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.clear();
            return tx.complete;
        });
};

const deleteItemFromData = (storeName, id) => {
    dbPromise
        .then(db => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.delete(id);
            return tx.complete;
        })
        .then(() => console.log('Item deleted!'));
};

// ADD dataURItoBlob HERE !
