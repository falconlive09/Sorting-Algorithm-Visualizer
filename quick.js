async function quickSort(ele, l, r) {
    if (l < r) {
        let pivotIndex = await partition(ele, l, r);
        await quickSort(ele, l, pivotIndex - 1);
        await quickSort(ele, pivotIndex + 1, r);
    }
}

async function partition(ele, l, r) {
    let pivot = parseInt(ele[r].style.height);
    let i = l - 1;

    ele[r].style.background = 'orange';

    for (let j = l; j <= r - 1; j++) {
        ele[j].style.background = 'red';
        await waitforme(delay);

        let jHeight = parseInt(ele[j].style.height);

        if (jHeight < pivot) {
            i++;
            ele[i].style.background = 'yellow';
            ele[j].style.background = 'yellow';
            await swap(ele[i], ele[j]);
            await waitforme(delay);
            ele[i].style.background = 'blue';
            ele[j].style.background = 'blue';
        } else {
            ele[j].style.background = 'blue';
        }
    }

    await swap(ele[i + 1], ele[r]);
    ele[r].style.background = 'blue';
    ele[i + 1].style.background = 'green';
    await waitforme(delay);

    return i + 1;
}

document.querySelector(".quickSort").addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    await quickSort(ele, l, r);

    // Turn all bars green after sorting
    for (let k = 0; k < ele.length; k++) {
        ele[k].style.background = 'green';
    }

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milisec);
    });
}

// ... (rest of your code remains the same)
