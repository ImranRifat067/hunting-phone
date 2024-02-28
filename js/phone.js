const lodePhone = async (fieldText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${fieldText}`)
    const data = await res.json();
    const phone = data.data;

    showPhone(phone);

}

function showPhone(phone) {
    console.log(phone);
    const mainContainer = document.getElementById('main-container');
    // mainContainer.innerText = '';
    mainContainer.textContent = '';
    phone.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact w-96 bg-gray-400 shadow-xl p-4`;

        phoneCard.innerHTML = `
        <figure><img class="rounded-lg" src="${phone.image}"
        alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>

        `
        mainContainer.appendChild(phoneCard);
    })
}
const handleSearch = () =>{
    inputField = document.getElementById('input-field');
    fieldText = inputField.value;
    lodePhone(fieldText);
    inputField.value ='';
}

lodePhone()