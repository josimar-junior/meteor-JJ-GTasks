Template.addTarefa.helpers({

})

Template.addTarefa.events({
  'submit #addTarefa, click #addBtn': function(e){
    e.preventDefault()
    Tarefas.insert({
      //nome: e.target.tarefa.value,
      nome: $('#tarefa').val(),
      status: true
    })
    Materialize.toast("Tarefa adicionada com sucesso!", 3000, 'blue')
    //e.target.tarefa.value = ''
    $('#tarefa').val('')
  }

})
