Template.addTarefa.helpers({

})

Template.addTarefa.events({
  'submit #addTarefa': function(e){
    e.preventDefault()
    Tarefas.insert({
      nome: e.target.tarefa.value,
      status: true
    })
    alert('Adicionado')
    e.target.tarefa.value = ''
  }
})
