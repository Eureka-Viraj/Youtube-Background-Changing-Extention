chrome.runtime.onInstalled.addListener(()=> {
    console.log('installed mother');
})

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark is Saved');
})