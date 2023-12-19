document.addEventListener('keydown', (event) => {
	if (event.target.id === 'prompt-textarea' && event.key === 'ArrowUp') {
		event.preventDefault();

		const elements = document.querySelectorAll('[data-message-author-role="user"]');
		const lastPrompt = elements[elements.length - 1].innerText;

		const textarea = document.getElementById('prompt-textarea');
		textarea.value = lastPrompt;
		textarea.focus();
	}

	/*if (event.target.id === 'prompt-textarea' && event.key === 'ArrowDown') {
		event.preventDefault();

		const textarea = document.getElementById('prompt-textarea');
		textarea.value = '';
		textarea.focus();
	}*/
});
