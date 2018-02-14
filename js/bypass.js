console.log('Running background script');

let observer;

function mutationObserve() {
    console.log('Running mutation observer');
    observer.observe(document.body, { childList: false, subtree:false, attributes: true, attributeFilter: ['class'] });
}

function mutationDisconnect() {
    observer.disconnect();
}

function handleMutation(mutations) {
    mutationDisconnect();
    mutations.forEach(mutation => {
        // console.log(mutation);
        // console.log($(mutation.target).hasClass('lock'));
        if($(mutation.target).hasClass('lock')){
            $('article.paywall').siblings().each(function(){
                $(this).remove();
                console.log('Removed paywall element ' + this);
            });
            $('body').removeClass('lock');
        }
    });
    mutationObserve();
}

observer = new MutationObserver(handleMutation);
mutationObserve();


