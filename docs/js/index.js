(() => {
    const HIDDEN_CLASS = 'hidden';

    const showButton = document.querySelector('.js-message-button');
    const closeButton = document.querySelector('.js-close-message');
    const message = document.querySelector('.js-message');

    if (!showButton || !message) return;

    showButton.addEventListener('click', () => {
        message.classList.toggle(HIDDEN_CLASS);
    });

    closeButton?.addEventListener('click', () => {
        message.classList.add(HIDDEN_CLASS);
    });
})();

(() => {
    const nodes = document.querySelectorAll('.js-pass-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-pass-input');
        const show = node.querySelector('.js-pass-input-show');
        const openIcon = node.querySelector('.js-pass-input-icon-open');
        const closedIcon = node.querySelector('.js-pass-input-icon-closed');

        show?.addEventListener('click', () => {
            const type = input?.getAttribute('type');

            if (type === 'password') {
                input.setAttribute('type', 'text');
                openIcon?.classList.remove('hidden');
                closedIcon?.classList.add('hidden');
            } else {
                input.setAttribute('type', 'password');
                openIcon?.classList.add('hidden');
                closedIcon?.classList.remove('hidden');
            }
        });
    });
})();

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

(() => {
    const ACTIVE_CLASS = 'active';

    const nodes = document.querySelectorAll('.js-text-input-node');

    nodes.forEach((node) => {
        const input = node.querySelector('.js-text-input');
        const reset = node.querySelector('.js-text-input-reset');
        const alert = node.querySelector('.js-text-input-alert');

        if (input.value !== '') {
            reset?.classList.add(ACTIVE_CLASS);
        }

        input?.addEventListener('blur', (event) => {
            if (event.target.value === '') {
                alert?.classList.add(ACTIVE_CLASS);
            } else {
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        input?.addEventListener('input', (event) => {
            if (event.target.value === '') {
                reset?.classList.remove(ACTIVE_CLASS);
            } else {
                reset?.classList.add(ACTIVE_CLASS);
                alert?.classList.remove(ACTIVE_CLASS);
            }
        });

        reset?.addEventListener('click', () => {
            if (input) {
                input.value = '';
                reset?.classList.remove(ACTIVE_CLASS);
            }
        });
    });
})();

(() => {
    const TOOLTIP_LEFT_CLASS = 'tooltip_left';
    const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', initTooltip);
        initTooltip();
    });

    function initTooltip() {
        const triggers = document.querySelectorAll('.js-tooltip-trigger');

        triggers?.forEach((trigger) => {
            const tooltip = trigger.querySelector('.js-tooltip');

            if (tooltip) {
                adjustTooltipPosition(trigger, tooltip);
            }
        });
    }

    function adjustTooltipPosition(trigger, tooltip) {
        tooltip.classList.remove(TOOLTIP_LEFT_CLASS);
        tooltip.classList.remove(TOOLTIP_BOTTOM_CLASS);

        const viewportWidth = window.innerWidth;
        const tooltipRect = tooltip.getBoundingClientRect();

        const tooltipRightPointX = tooltipRect.left + tooltipRect.width;
        const tooltipTopPointY = tooltipRect.top;

        if (tooltipRightPointX > viewportWidth) {
            tooltip.classList.add(TOOLTIP_LEFT_CLASS);
        }

        if (tooltipTopPointY < 0) {
            tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
        }
    }
})();

//# sourceMappingURL=index.js.map
