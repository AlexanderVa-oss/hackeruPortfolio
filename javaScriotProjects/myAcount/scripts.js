// incase export default
import Action from "./classes/Action.js";
import ActionManager from './classes/ActionManager.js'
// incase several exports
// import { Action } from "./classes/Action.js";

window.addActionToManager = function () {
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let amount = +document.getElementById('amount').value

    let action = new Action(type, description, amount)

    manager.addAction(action);
    showActionsOnTable();


    description = document.getElementById('description').value = "";
    amount = document.getElementById('amount').value = "";
};

window.deleteActionFromManager = function (actionId) {
    if (confirm('are you sure?')) {
        manager.deleteAction(actionId);
        showActionsOnTable();
    }
};

window.updateActionInManager = function (actionId) {
    let newAmount = prompt('Please Enter new amount')
    if (newAmount == null || newAmount == '') alert('Somthing went wrong')
    else {
        manager.updateAction(actionId, +newAmount);
        showActionsOnTable();
    }
}

function showActionsOnTable() {
    document.getElementById('actions').innerHTML = ''
    localStorage.setItem('actions', JSON.stringify(manager.actions));
    for (let action of manager.actions) {
        document.getElementById('actions').innerHTML += `
        <tr class=${action.type == "income" ? "table-success" : "table-danger"}>
        <td>${action.description}</td>
        <td>${action.amount}</td>
        <td> <a onclick='updateActionInManager(${action.id})'> <i class="fa-regular fa-pen-to-square"></i><a></td>
        <td> <a onclick='deleteActionFromManager(${action.id})'> <i class="fa-solid fa-trash"> </i><a></td>
        </tr>`;
    }
}
let manager = new ActionManager();
showActionsOnTable();
