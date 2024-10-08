﻿$(document).ready(function () {
    loadData();
});

function loadData() {
    $('#tblProduct').DataTable({
        destroy: true,  // Ensure any existing table is destroyed before reinitializing
        ajax: {
            url: '/admin/product/getallproduct',
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'description' },
            { data: 'category.name' },
            {
                data: null,
                render: function (data, type, row) {
                    var html = `<div style="display:flex">
                        <a href="/admin/product/edit/${data.id}" class="btn btn-sm btn-primary" style="margin:10px;display: inline-block">
                       <i class="bi bi-pencil-square"></i> Edit
                    </a>
                    <a style="display: inline-block" href="/admin/product/delete/${data.id}" class="btn btn-sm btn-primary">
                       <i class="bi bi-trash"></i></span>Delete
                    </a>
                    </div>`;
                    return html;
                    //`<a style="margin-right:10px" href="/admin/product/edit/${data.id}" class="btn btn-sm btn-primary"> <i class="bi bi-pencil-square"></i> Edit</a><a href="/admin/product/delete/${data.id}" class="btn btn-sm btn-primary"><i class="bi bi-trash"></i></span>Delete</a>;
                    
                },
                orderable: false, // This column should not be orderable
            },
        ],

    });
}
