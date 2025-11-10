@extends('layouts.app')



@section('titulo')
    Regístrate
@endsection

@section('contenido')
    <div class="md:flex">
        <div class="md:w-4/12 bg-white p-6 rounded-lg shadow-xl">
            <form action="{{ route('register') }}" method="POST">
                @csrf
                <div class="mb-5">
                    <label id="name" class="mb-2 block uppercase text-gray-500 font-bold">Name</label>
                    <input id="name" name="Username"type="text" placeholder="Nombre de Usuario"
                        class="border p-3 w-full rounded-lg @error('name') border-red-500 bg-red-50 @enderror value="{{ old('name') }}">
                    @error('name')
                        <p class="mt-1 text-sm text-red-600 italic">* {{ $message }}</p>
                    @enderror
                </div>
                <div class="mb-5">
                    <label id="username" class="mb-2 block uppercase text-gray-500 font-bold">Username</label>
                    <input id="username" name="Username"type="text" placeholder="Nombre de Usuario"
                        class="border p-3 w-full rounded-lg">
                </div>
                <div class="mb-5">
                    <label id="email" class="mb-2 block uppercase text-gray-500 font-bold">Email</label>
                    <input id="email" name="email"type="email" placeholder="Email de Registro"
                        class="border p-3 w-full rounded-lg">
                </div>

                <div class="mb-5">
                    <label id="password" class="mb-2 block uppercase text-gray-500 font-bold">Password</label>
                    <input id="password" name="pasword"type="password" placeholder="Password de Registro"
                        class="border p-3 w-full rounded-lg">
                </div>
                <div class="mb-5">
                    <label id="password_confirmation" class="mb-2 block uppercase text-gray-500 font-bold">Repetir
                        Password</label>
                    <input id="password_confirmation" name="pasword"type="password_confirmation"
                        placeholder="Confirma Tu Password" class="border p-3 w-full rounded-lg">
                </div>

                <input type="submit" value="Crear Cuenta"
                    class="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-lg">
            </form>
        </div>

    </div>
    </div>
@endsection
