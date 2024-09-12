$(document).ready(function() {
    // Função para carregar as listas
    function loadLists() {
      $.get('http://localhost:3000/lists', function(data) {
        $('#list-container').empty(); // Limpar o container de listas
        data.forEach(function(list) {
          $('#list-container').append(
            `<li class="list-group-item" data-id="${list.id}">${list.title}</li>`
          );
        });
      });
    }

    // Carregar listas ao iniciar
    loadLists();

    // Carregar tarefas ao clicar numa lista
    $('#list-container').on('click', 'li', function() {
      const listId = $(this).data('id');
      $('#task-list-id').val(listId); // Armazenar o ID da lista
      $.get(`http://localhost:3000/tasks?listId=${listId}`, function(tasks) {
        $('#tasks-container').empty(); // Limpar o container de tarefas
        tasks.forEach(function(task) {
          const taskClass = task.completed ? 'completed' : '';
          $('#tasks-container').append(
            `<li class="list-group-item ${taskClass}" data-id="${task.id}">
               <input type="checkbox" class="complete-task" ${task.completed ? 'checked' : ''}> 
               ${task.title}
               <button class="btn btn-danger btn-sm float-right delete-task">Excluir</button>
             </li>`
          );
        });
      });
    });

    // Adicionar nova lista
    $('#add-list-form').submit(function(event) {
      event.preventDefault();
      const newList = {
        title: $('#list-title').val()
      };
      $.post('http://localhost:3000/lists', newList, function() {
        $('#list-title').val(''); // Limpar o campo
        loadLists(); // Recarregar listas
      });
    });

    // Adicionar nova tarefa
    $('#add-task-form').submit(function(event) {
      event.preventDefault();
      const newTask = {
        title: $('#task-title').val(),
        listId: $('#task-list-id').val(),
        completed: false
      };
      $.post('http://localhost:3000/tasks', newTask, function() {
        $('#task-title').val(''); // Limpar o campo
        const listId = $('#task-list-id').val();
        $.get(`http://localhost:3000/tasks?listId=${listId}`, function(tasks) {
          $('#tasks-container').empty(); // Limpar o container de tarefas
          tasks.forEach(function(task) {
            const taskClass = task.completed ? 'completed' : '';
            $('#tasks-container').append(
              `<li class="list-group-item ${taskClass}" data-id="${task.id}">
                 <input type="checkbox" class="complete-task" ${task.completed ? 'checked' : ''}> 
                 ${task.title}
                 <button class="btn btn-danger btn-sm float-right delete-task">Excluir</button>
               </li>`
            );
          });
        });
      });
    });

    // Marcar tarefa como concluída
    $('#tasks-container').on('click', '.complete-task', function() {
      const taskId = $(this).closest('li').data('id');
      const completed = $(this).is(':checked');
      $.ajax({
        url: `http://localhost:3000/tasks/${taskId}`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify({ completed: completed }),
        success: function() {
          const listId = $('#task-list-id').val();
          $.get(`http://localhost:3000/tasks?listId=${listId}`, function(tasks) {
            $('#tasks-container').empty(); // Limpar o container de tarefas
            tasks.forEach(function(task) {
              const taskClass = task.completed ? 'completed' : '';
              $('#tasks-container').append(
                `<li class="list-group-item ${taskClass}" data-id="${task.id}">
                   <input type="checkbox" class="complete-task" ${task.completed ? 'checked' : ''}> 
                   ${task.title}
                   <button class="btn btn-danger btn-sm float-right delete-task">Excluir</button>
                 </li>`
              );
            });
          });
        }
      });
    });

    // Excluir tarefa
    $('#tasks-container').on('click', '.delete-task', function() {
      const taskId = $(this).closest('li').data('id');
      $.ajax({
        url: `http://localhost:3000/tasks/${taskId}`,
        type: 'DELETE',
        success: function() {
          const listId = $('#task-list-id').val();
          $.get(`http://localhost:3000/tasks?listId=${listId}`, function(tasks) {
            $('#tasks-container').empty(); // Limpar o container de tarefas
            tasks.forEach(function(task) {
              const taskClass = task.completed ? 'completed' : '';
              $('#tasks-container').append(
                `<li class="list-group-item ${taskClass}" data-id="${task.id}">
                   <input type="checkbox" class="complete-task" ${task.completed ? 'checked' : ''}> 
                   ${task.title}
                   <button class="btn btn-danger btn-sm float-right delete-task">Excluir</button>
                 </li>`
              );
            });
          });
        }
      });
    });
  });
