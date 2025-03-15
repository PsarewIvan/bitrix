(() => {
    const HIDDEN_CLASS = 'hidden';
    const ACTIVE_CLASS = 'active';

    const tabsContents = document.querySelectorAll('.js-tabs');

    tabsContents.forEach((tabWrapper) => {
        const tabsButton = tabWrapper.querySelectorAll('button');

        tabsButton.forEach((tab) => {
            tab.addEventListener('click', (event) => {
                setActiveTab(tab, tabsButton);
                setActiveContent(tab, tabsButton);
            });
        });
    });

    function setActiveTab(tab, tabs) {
        tabs.forEach((item) => {
            item.classList.remove(ACTIVE_CLASS);
        });

        tab.classList.add(ACTIVE_CLASS);
    }

    function setActiveContent(tab, tabs) {
        tabs.forEach((item) => {
            changeContentVisibility(item, 'hide');
        });

        changeContentVisibility(tab, 'show');
    }

    function changeContentVisibility(tab, type) {
        const selectedSelector = tab.dataset.tab;

        if (selectedSelector) {
            const selectedContent = document.querySelector(
                `.${selectedSelector}`
            );

            switch (type) {
                case 'show':
                    selectedContent?.classList.remove(HIDDEN_CLASS);
                    break;
                case 'hide':
                    selectedContent?.classList.add(HIDDEN_CLASS);
                    break;
            }
        }
    }
})();
