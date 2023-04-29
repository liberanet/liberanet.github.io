var result = window.prompt('パスワード？');

if (result == 'secret'){
	window.alert('会員さまようこそ');
	}

else {
	window.alert('あなたには入室資格がありません');
	location.href="https://www.google.com";
	}