// Supporting Section: Link card header to accordion and expand

document.addEventListener('DOMContentLoaded', function () {
    // Explicit mapping for supporting section to accordion
    const mapping = {
        'Depression': {
            accordionHeaderId: 'flush-heading-1',
            collapseId: 'flush-collapse-1',
        },
        'Bipolar Disorder': {
            accordionHeaderId: 'flush-heading-3',
            collapseId: 'flush-collapse-3',
        },
        'OCD': {
            accordionHeaderId: 'flush-heading-5',
            collapseId: 'flush-collapse-5',
        },
        'Anxiety Disorders': {
            accordionHeaderId: 'flush-heading-2',
            collapseId: 'flush-collapse-2',
        },
        'PTSD': {
            accordionHeaderId: 'flush-heading-4',
            collapseId: 'flush-collapse-4',
        },
        'Eating Disorders': {
            accordionHeaderId: 'flush-heading-6',
            collapseId: 'flush-collapse-6',
        },
        // Add more mappings here as needed
    };

    document.querySelectorAll('#supporting-section .condition-header').forEach(function(header) {
        if (header.dataset.linkedAccordion === 'true') return;
        const titleElem = header.querySelector('.condition-title');
        if (!titleElem) return;
        const conditionName = titleElem.textContent.trim();
        const map = mapping[conditionName];
        if (!map) return;
        const accordionHeader = document.getElementById(map.accordionHeaderId);
        const collapse = document.getElementById(map.collapseId);
        if (!accordionHeader || !collapse) {
            console.warn(`[supporting-accordion-link] Accordion header or collapse not found for '${conditionName}'`);
            return;
        }
        const btn = accordionHeader.querySelector('button');
        if (!btn) {
            console.warn(`[supporting-accordion-link] Accordion button not found for '${conditionName}'`);
            return;
        }

        // Make the header clickable and accessible
        header.style.cursor = 'pointer';
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-controls', map.collapseId);
        header.setAttribute('aria-label', `Jump to and expand ${conditionName} details`);

        function jumpAndExpandAccordion(e) {
            e.preventDefault();
            // Scroll to the top of the mental health section
            const mentalHealthSection = document.getElementById('mental-health-section');
            const navbar = document.querySelector('.navbar.fixed-top');
            const navHeight = navbar ? navbar.offsetHeight : 0;
            if (mentalHealthSection) {
                const y = mentalHealthSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            // Expand the accordion if not already open (after scroll)
            setTimeout(function() {
                if (btn && collapse && !collapse.classList.contains('show')) {
                    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                        bootstrap.Collapse.getOrCreateInstance(collapse).show();
                    } else {
                        btn.click();
                    }
                }
            }, 400); // Wait for scroll to finish
        }

        header.addEventListener('click', jumpAndExpandAccordion);
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                jumpAndExpandAccordion(e);
            }
        });
        header.dataset.linkedAccordion = 'true';
        // For debugging
        console.log(`[supporting-accordion-link] Linked '${conditionName}' to accordion '${map.accordionHeaderId}'`);
    });
});
