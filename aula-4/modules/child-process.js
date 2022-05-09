// mandar executar comandos no terminal 


const { exec, spawn } = require('child_process');

exec ('curl ifconfig.me', (err, stdout, stderr) => {
    if (err) {
        console.log('Error!', err.message);
        return;
    }

    console.log(stdout);
});



const ls = spawn('ls', ['-lsah'], { shell: true });

ls.stdout.on('data', (data) => console.log('stdout', data.toString()));
ls.stderr.on('data', (data) => console.log('stderr', data.toString()));
ls.on('error', (error) => console.log('error', error.message));
ls.on('close', (code) => console.log('complete', code));

// exec executa um comando 
// curl permite fazer pedidos/respostas http
// pesquisar sobre Child processes













/*
 As 4 maneiras diferentes de criar um processo filho no Node.js:
 - método spawn()
 - método fork()
 - método exec()
 - método execFile()


 - método spawn(): Este método gera um novo processo usando o comando fornecido e os argumentos da linha de comando em args. A instância ChildProcess implementa EventEmitterAPI que nos permite registrar manipuladores para eventos no objeto filho diretamente. Alguns eventos que podem ser registrados para tratamento com o ChildProcess são exit, desconexão, erro, fechamento e mensagem.

 Sintaxe:

child_process.spawn(command[, args][, options])
Parâmetros:

command: Aceita uma string que é o comando a ser executado.
args: Lista de argumentos de string. O valor padrão é uma matriz vazia.
opções:
shell: Aceita um valor booleano. Se true, executa o comando dentro de um shell. Shell diferente pode ser especificado como uma string. O valor padrão é false, o que implica em nenhum shell. Por padrão, spawn() não cria um shell para executar o comando, portanto, é importante passá-lo como opção ao chamar o processo filho.
Opções adicionais como cwd, env, argv0, stdio etc podem ser usadas conforme a necessidade.

Valor de retorno: Retorna um objeto ChildProcess.

---------------------------------------------

Método exec(): Este método cria um shell primeiro e depois executa o comando.

Sintaxe:

child_process.exec(command[, options][, callback])
Parâmetros:

command: aceita uma string que especifica o comando a ser executado com argumentos separados por espaço.
opções: Algumas das opções disponíveis são cwd, env, encoding, shell, timeout etc
callback: A função callback é chamada quando o processo termina. Os argumentos para esta função são error, stdout e stderr respectivamente.
Valor de retorno: Retorna uma instância de ChildProcess.

*/
