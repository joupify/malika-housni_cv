function switchToEnglish() {
	// Pour les visiteurs
	window.location.href = "en.html";
	
	// Pour l'impression
	localStorage.setItem('preferredLanguage', 'en');
}

function switchToFrench() {
	window.location.href = "index.html";
	localStorage.setItem('preferredLanguage', 'fr');
}

// Au chargement
document.addEventListener('DOMContentLoaded', function() {
	const printBtn = document.querySelector('.print-btn');
	if (printBtn) {
			printBtn.addEventListener('click', function() {
					const lang = localStorage.getItem('preferredLanguage') || 'fr';
					if (lang === 'en') {
							// Rediriger vers la version anglaise avant impression
							window.location.href = "en.html?print=true";
					} else {
							window.location.href = "index.html?print=true";
					}
					
					// Délai pour permettre le chargement avant impression
					setTimeout(() => window.print(), 500);
			});
	}
	
	// Gestion du paramètre print dans l'URL
	if (window.location.search.includes('print=true')) {
			setTimeout(() => {
					window.print();
					// Retour à la version originale après impression
					if (document.documentElement.lang === 'en') {
							history.replaceState(null, '', 'en.html');
					} else {
							history.replaceState(null, '', 'index.html');
					}
			}, 300);
	}
});


// Force le rendu d'impression
function preparePrint() {
  document.querySelectorAll('.print-area').forEach(el => {
    el.style.height = '1122px';
    el.style.overflow = 'hidden';
  });
}

window.addEventListener('beforeprint', preparePrint);