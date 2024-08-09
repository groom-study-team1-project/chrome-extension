document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('toggleCheckbox');
    const message = document.getElementById('message');
    const slider = document.querySelector('.slider');

    chrome.storage.sync.get(['toggleState'], (result) => {
        const isChecked = result.toggleState;
        checkbox.checked = isChecked;
        updateTooltip(isChecked);
    });

    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        chrome.storage.sync.set({ toggleState: isChecked });
        updateTooltip(isChecked);
    });

    function updateTooltip(isChecked) {
        slider.setAttribute('data-message', isChecked ? 'show' : 'hide');
    }
});
