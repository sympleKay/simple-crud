



/*
const trashcan = document.querySelector('.deleteTenant');
        trashcan.addEventListener('click', () => {
            const endpoint = `/delete/${trashcan.dataset.doc}`
            fetch (endpoint, {
                method: 'DELETE'
            })
            .then( (response) => response.json())
            .then((data) => window.location.href = data.redirect)
            .catch(err => console.log(err));
        })

$(document).ready(function () {
    $('.deleteTenant').on('click', function (e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax ({
            type: 'DELETE',
            url: '/delete/'+id,
            success: function (response) {
                alert('Deleting User');
                window.location.href = '/';
            },
            error: function (err) {
                console.log(err);
            }
        });
        window.location.href = '/';
    });
});
*/