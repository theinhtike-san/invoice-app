

const products = [
    {
        id: 0,
        name: "empty",
        price: 0,
    },
    {
        id: 1,
        name: "Web Development",
        price: 700,
    },
    {
        id: 2,
        name: "Domain",
        price: 20,
    },
    {
        id: 3,
        name: "Hosting",
        price: 50,
    },
    {
        id: 4,
        name: "Design Package",
        price: 500,
    },
    {
        id: 5,
        name: "Data System",
        price: 700,
    },
    {
        id: 6,
        name: "Profile Website",
        price: 800,
    },
    {
        id: 7,
        name: "Certificate Verification System",
        price: 750,
    },
    {
        id: 8,
        name: "Business Email",
        price: 900,
    },
    {
        id: 9,
        name: "Education Services",
        price: 500,
    },




];
const history = [
    {
        invoice: 0,
        customerName: "kyaw kyaw",
        cashierName: "mg mg",
        costTotal: 0,
        boughtItem: [],
        date: 0,
    },
    {
        invoice: 1,
        customerName: "zaw zaw",
        cashierName: "mg mg",
        costTotal: 0,
        boughtItem: [],
        date: 0,
    }
]
// selector

const app = document.querySelector("#app");
const addRecord = app.querySelector("#addRecord");
const recordList = app.querySelector("#recordList");
const productSelect = app.querySelector('[name="product_id"]');
const costTotal = app.querySelector("#costTotal");
const manageProduct = app.querySelector("#manageProduct");
const manageProductBox = app.querySelector("#manageProductBox");
const manageProductBox1 = app.querySelector("#manageProductBox1");
const closeManageProductBox = app.querySelector("#closeManageProductBox");
const printBtn = app.querySelector("#printBtn");
const voucher = app.querySelector("#slip");

const productList = app.querySelector("#serviceList");
const newProductName = app.querySelector("#newProductName");
const newProductPrice = app.querySelector("#newProductPrice");
const newProductAddBtn = app.querySelector("#newProductAddBtn");

const productAddForm = app.querySelector("#productAddForm");
const productAddForm1 = app.querySelector("#productAddForm1");


const date = app.querySelector(".date");


// date controller 
const updateDate = () => {
    const dateFull = new Date();

    date.innerText = `${dateFull.toLocaleDateString()} ${dateFull.toLocaleTimeString()}`;

}
setInterval((updateDate), 1000);


// invoice no controller

const invoiceNo = app.querySelector(".invoice-no");
const invoice0 = app.querySelector(".invoice0");
const boughtItem = recordList.querySelectorAll(".record-row");
invoiceNo.innerText = (history[history.length - 1].invoice) + 1;

// history Array
printBtn.addEventListener("click", () => {
    const invoice1 = history[history.length - 1].invoice;
    const newInvoice = invoice1 + 1;
    const invoiceString = newInvoice.toString();
    const invoiceLength = [...invoiceString];
    const addInvoice = invoice0.innerText.substring(invoiceLength.length);
    invoiceNo.innerText = newInvoice;
    console.log(boughtItem);

    const record = {
        invoice: (invoice1) + 1,
        customerName: "u aye",
        cashierName: "Aye Aye",
        costTotal: parseFloat(includeTax.innerText),

    }
    history.push(record);
    const fs = require('fs');

    http.writeFile('./history.json', history, err => {
        if (err) {
            console.error(err);
        }
    })

})


// function
const createOption = (content, value) => {
    const option = document.createElement("option");
    option.innerText = content;
    option.value = value;
    return option;
};

// service record table list
const createRecordRow = (id, productName, productPrice, quantity) => {
    const recordRow = document.createElement("tr");
    recordRow.className = "border-b border-neutral-200 group odd:bg-slate-200 even:bg-white last:border-b-2 border-slate-600";
    recordRow.classList.add("record-row");
    recordRow.setAttribute("product-id", id);
    recordRow.innerHTML = `
      <td class="p-1 text-center"></td>
      <td class="p-1">${productName}</td>
      <td class="p-1 record-row-price text-end">${productPrice}</td>
      <td class="p-1 text-end ">
            
                  <button
                    class="record-row-decrement-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 -translate-x-3 group-hover:translate-x-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 stroke-white pointer-events-none"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <span class="record-row-q text-center">${quantity}</span>
                  <button
                    class="record-row-increment-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 translate-x-3 group-hover:translate-x-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 stroke-white pointer-events-none"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </td>
      <td class="p-3 text-end  relative">
      <span class='record-row-cost  '>${productPrice * quantity}</span>
      <button class="print:hidden record-row-del bg-neutral-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full absolute top-0 right-0 translate-x-[120%] group-hover:translate-x-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 stroke-white pointer-events-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
      </td>
      `;

    window.addEventListener("afterprint", (event) => {
        recordList.innerHTML = `<tr class="hidden last:table-row even:bg-slate-400 ">
      <td class="text-center p-1 bg-blue-100/20" colspan="5">
        There is no record 
      </td>
    </tr>`;
        costTotal.innerText = "0";
        tax.innerText = "0";
        includeTax.innerText = "0";
    })
    return recordRow;
};

// cost total calculate
const recordTotal = () => {
    
    costTotal.innerText = [...app.querySelectorAll(".record-row-cost")].reduce(
        (pv, cv) => pv + parseFloat(cv.innerText),
        0
    );

    // tax calculate
    tax.innerText = ((parseInt(costTotal.innerText) / 100) * 5).toFixed(1);
    includeTax.innerText = parseInt(costTotal.innerText) + parseInt(tax.innerText);
};


// handlers

// product box open/close event
const manageProductHandler = () => {
    manageProductBox.classList.toggle("translate-x-full");
    manageProductBox.classList.add("duration-300")

}

// record list item increase/decrease handler
const recordRowQuantityIncrement = (productId, quantity = 1) => {
    const currentRecordRow = app.querySelector(`[product-id='${productId}']`);
    const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
    const currentRecordRowCost =
        currentRecordRow.querySelector(".record-row-cost");
    const currentRecordRowPrice =
        currentRecordRow.querySelector(".record-row-price");
    currentRecordQuantity.innerText =
        parseInt(currentRecordQuantity.innerText) + parseInt(quantity);
    currentRecordRowCost.innerText =
        currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
    recordTotal();
};
const recordRowQuantityDecrement = (productId, quantity = 1) => {
    const currentRecordRow = app.querySelector(`[product-id='${productId}']`);
    const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
    const currentRecordRowCost = currentRecordRow.querySelector(".record-row-cost");
    const currentRecordRowPrice =
        currentRecordRow.querySelector(".record-row-price");
    currentRecordQuantity.innerText =
        parseInt(currentRecordQuantity.innerText) - parseInt(quantity);
    currentRecordRowCost.innerText =
        currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
    recordTotal();
}

// record row delete handler
const recordRowDelHandler = (event) => {
    const recordRow = event.target.closest(".record-row");
    if (confirm("Are U sure to delete?")) {
        recordRow.remove();
        recordTotal();
    }
};

// record row add handler 
const addRecordHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(addRecord);
    const { id, name, price } = products.find(
        (product) => product.id == formData.get("product_id")
    );

    const isExitedRow = [...app.querySelectorAll("[product-id]")].find((el) => {
        return el.getAttribute("product-id") == formData.get("product_id");
    });

    if (isExitedRow) {
        console.log("update quantity");
        recordRowQuantityIncrement(
            formData.get("product_id"),
            formData.get("quantity")
        );
    } else {
        console.log("add new row");
        recordList.append(
            createRecordRow(id, name, price, formData.get("quantity"))
        );
        recordTotal();
    }

    addRecord.reset();
    //   console.log(formData.get("product_id"), formData.get("quantity"));
    //   console.log(currentProduct);
};

// print handler 
const printBtnHandler = () => {
    print();
}

// new service add handler 
const productAddBtnHandler = (event) => {
    event.preventDefault();
    productBtnCondition();
    productAddForm.reset();

}

// to add new service check condition
const productBtnCondition = () => {
    const newProduct = newProductName.value;
    const productPrice = newProductPrice.value;
    if (newProduct !== "" && productPrice !== "") {
        const newList = document.createElement("li");

        newList.innerHTML = `<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${newProduct}' disabled/>
      <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
      <div class="col-span-7 items-center grid grid-cols-12  w-full text-right">
      <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${productPrice}" disabled /><span class="col-span-4 pr-3 text-slate-400">USD</span>
      </div>
    
      <div class="grid grid-cols-2 col-span-5 justify-between gap-1 h-full ">
      <button class="print:hidden product-list-edit bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full    top-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            class="w-4  h-4 stroke-white pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
    
      <button class="print:hidden product-list-row-del bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full    top-0 right-0  group-hover:translate-x-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 stroke-white pointer-events-none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
      </div>
    </div>
    </div>`;

        const lastService = (products[products.length - 1].id);
        const newService = {
            id: lastService + 1,
            name: newProduct,
            price: parseFloat(productPrice),
        }
        products.push(newService);


        const listItem = newList.querySelector(".product-list")
        listItem.setAttribute("value", lastService + 1);
        productList.append(newList);

        // added new service to select option 
        productSelect.append(new Option(products[products.length - 1].name, products[products.length - 1].id));

        // manageProduct product list edit function 
        const productEdit = newList.querySelector(".product-list-edit");
        productEdit.addEventListener("click", productEditHandler);

        // manageProduct product list delete function 
        const productListDel = newList.querySelector(".product-list-row-del")
        productListDel.addEventListener("click", productListDelHandler);

    }
}

//manage product list delete handler 
const productListDelHandler = (event) => {

    const list = event.target.closest(".product-list");
    console.log(list);
    const listValue = parseInt(list.getAttribute("value"))
    console.log(listValue);
    if (confirm("Are U sure to delete?")) {
        const listFind = products.findIndex(object => {
            return object.id === listValue
        });
        list.remove();
        products.splice(listFind, 1)

        const selectOption = productSelect.querySelector(`[value="${listValue}"]`);
        console.log(selectOption);
        console.dir(productSelect)

        selectOption.remove();

    }
}

// edit name handler 
const editedName = (event) => {

    console.log(event.target);
    console.log(event.target.value);
    const originalName = event.target.value;
    console.log(originalName)
    const editList = event.target.closest(".product-list");

    event.target.toggleAttribute("disabled");
    editList.classList.toggle("border-blue-500")

    const listValue = parseInt(editList.getAttribute("value"))
    console.log(listValue);

    //to get id of target list
    const listFind = products.findIndex(object => {
        return object.id === listValue
    });
    products[listFind].name = originalName;

    // add to select option 
    const selectOption = productSelect.querySelector(`[value="${listValue}"]`);
    selectOption.innerText = originalName;
    console.log(originalName);
}
//edit price handler 
const editedPrice = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    const originalPrice = event.target.value;
    const editList = event.target.closest(".product-list");

    event.target.toggleAttribute("disabled");
    editList.classList.toggle("border-blue-500")

    const listValue = parseInt(editList.getAttribute("value"))
    console.log(listValue);
    const listFind = products.findIndex(object => {
        return object.id === listValue
    });
    products[listFind].price = originalPrice;

}

//manage product list edit handler 
const productEditHandler = (event) => {
    console.log(event.target.closest(".product-list"));
    const editList = event.target.closest(".product-list");
    const editBtn = editList.querySelector(".product-list-edit")
    const originalName = editList.querySelector(".original-name")
    const originalPrice = editList.querySelector(".original-price")
    const editListText = originalName.value;

    originalName.toggleAttribute("disabled");
    originalPrice.toggleAttribute("disabled");

    originalName.classList.add("bg-slate-100", "edit-input")
    originalPrice.classList.add("bg-slate-100", "edit-input")
    originalName.style.outline = "none";
    originalPrice.style.outline = "none";

    editList.classList.toggle("border-blue-500")
    const focus = originalName.focus();
    const len = originalName.value.length;

    // to focus cursor at the end of text 
    originalName.setSelectionRange(len, len);
    focus;

    // set change event to get input data on mouse change immediately 
    originalName.addEventListener("change", editedName);

    originalPrice.addEventListener("change", editedPrice);

    const edit = editBtn.querySelector(".edit");
    const save = editBtn.querySelector(".save");
    edit.classList.toggle("hidden");
    save.classList.toggle("hidden");

}

products.forEach(({ id, name, price }) => {

    productSelect.append(new Option(name, id));

    const list = document.createElement("li");
    list.innerHTML = `<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${name}' disabled/>
    <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
    <div class="col-span-7 items-center grid grid-cols-12  w-full text-right">
    <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${price}" disabled /><span class="col-span-4 pr-3 text-slate-400">USD</span>
    </div>
  
    <div class="grid grid-cols-2 col-span-5 justify-between gap-1 h-full ">
    <button class="print:hidden product-list-edit bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full    top-0 ">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="edit w-6 h-6 text-blue-400 pointer-events-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" 
        fill="currentColor"
        viewBox="0 0 448 512"
    
      
        
        class="save hidden w-6 h-6 fill-blue-400 pointer-events-none">
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      
  
    <button class="print:hidden product-list-row-del bg-neutral-500    group-hover:opacity-100  group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full    top-0 right-0  group-hover:translate-x-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6  text-red-500 pointer-events-none"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  </button>
    </div>
  </div>
  </div>`;

    productList.append(list);
    const productListDel = list.querySelector(".product-list-row-del")
    productListDel.addEventListener("click", productListDelHandler);
    const listItem = list.querySelector(".product-list");
    listItem.setAttribute("value", id)

    const emptyList = productList.querySelector('[value = "0"')
    emptyList.classList.add("hidden");

    const emptyOption = productSelect.querySelector('[value = "0"');
    emptyOption.classList.add("hidden");


    const productEdit = list.querySelector(".product-list-edit");
    productEdit.addEventListener("click", productEditHandler);


});


// listener
addRecord.addEventListener("submit", addRecordHandler);
recordList.addEventListener("click", (event) => {
    const currentRecordRow = event.target.closest(".record-row");
    if (event.target.classList.contains("record-row-del")) {
        recordRowDelHandler(event);
    } else if (event.target.classList.contains("record-row-increment-q")) {
        recordRowQuantityIncrement(currentRecordRow.getAttribute("product-id"));

    } else if (event.target.classList.contains("record-row-decrement-q")) {
        recordRowQuantityDecrement(currentRecordRow.getAttribute("product-id"));
    }
});

manageProduct.addEventListener("click", manageProductHandler);
closeManageProductBox.addEventListener("click", manageProductHandler)

printBtn.addEventListener("click", printBtnHandler);

newProductAddBtn.addEventListener("click", productAddBtnHandler);

