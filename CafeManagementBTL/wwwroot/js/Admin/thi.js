$(document).ready(function () {
    loadData();
});

function loadData() {
    $('#tblCategory').DataTable({
        destroy: true,  // Ensure any existing table is destroyed before reinitializing
        ajax: {
            url: '/admin/categorythi/GetAllCategory',
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            //{ data: 'descriptions' },
            {
                data: null,
                render: function (data, type, row) {
                    return `
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">${data.id}</p>
                            </div>
                        </div>
                    </div>
                    `;

                    //<a href="/admin/category/edit/${data.id}" class="btn btn-sm btn-primary" style="margin:10px">
                    //        <i class="bi bi-pencil-square"></i> Edit
                    //    </a>
                    //    <a href="/admin/category/delete/${data.id}" class="btn btn-sm btn-primary">
                    //        <i class="bi bi-trash"></i></span>Delete
                    //    </a >
                },
                //`<a href="/admin/category/edit/${data.id}"><i class="bi bi-pencil-square"></i></a>`
                orderable: false, // This column should not be orderable
            },
        ],

    });
}

